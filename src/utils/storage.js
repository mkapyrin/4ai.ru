// Simple storage utility for admin data persistence
// Works in browser environment for remote server deployment

export const STORAGE_KEYS = {
  BLOG_POSTS: 'admin_blog_posts',
  PRACTICES: 'admin_practices',
  ADMIN_AUTH: 'admin_authenticated',
  ADMIN_AUTH_TIME: 'admin_auth_time'
}

// File utilities
export const fileUtils = {
  formatDate: (dateString) => {
    if (!dateString) return ''
    try {
      return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date(dateString))
    } catch {
      return dateString
    }
  },

  truncateText: (text, length = 50) => {
    if (!text) return ''
    return text.length > length ? `${text.substring(0, length)}...` : text
  },

  generateUniqueId: () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9)
  },

  validateImage: (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!validTypes.includes(file.type)) {
      throw new Error('Поддерживаются только изображения: JPEG, PNG, WebP, GIF')
    }

    if (file.size > maxSize) {
      throw new Error('Размер файла не должен превышать 5MB')
    }

    return true
  },

  convertToBase64: (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  },

  generateSlug: (title) => {
    if (!title) return '';
    
    const cyrillicToLatin = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
      'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
      'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
      'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }

    return title
      .toLowerCase()
      .split('')
      .map(char => cyrillicToLatin[char] || char)
      .join('')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  },

  stripHtml: (html) => {
    if (!html) return '';
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }
}

// Storage operations
export const storage = {
  // Get data from localStorage
  get: (key) => {
    try {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error(`Error reading ${key} from storage:`, error)
      return []
    }
  },

  // Save data to localStorage
  set: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (error) {
      console.error(`Error saving ${key} to storage:`, error)
      return false
    }
  },

  // Remove item from localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error(`Error removing ${key} from storage:`, error)
      return false
    }
  },

  // Clear all data
  clear: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key)
      })
      return true
    } catch (error) {
      console.error('Error clearing storage:', error)
      return false
    }
  }
}

// Export/Import functionality
export const exportData = () => {
  try {
    const blogPosts = storage.get(STORAGE_KEYS.BLOG_POSTS) || []
    const practices = storage.get(STORAGE_KEYS.PRACTICES) || []

    const data = {
      blogPosts,
      practices,
      exportDate: new Date().toISOString(),
      version: '1.0'
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    })
    
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `4ai-content-backup-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    return true
  } catch (error) {
    console.error('Error exporting data:', error)
    throw new Error('Ошибка экспорта данных')
  }
}

export const importData = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('Файл не выбран'))
      return
    }
    
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        
        if (!data.blogPosts && !data.practices) {
          reject(new Error('Неверный формат файла'))
          return
        }
        
        // Backup current data
        const currentBlogs = storage.get(STORAGE_KEYS.BLOG_POSTS)
        const currentPractices = storage.get(STORAGE_KEYS.PRACTICES)
        
        try {
          // Import new data
          if (data.blogPosts) {
            storage.set(STORAGE_KEYS.BLOG_POSTS, data.blogPosts)
          }
          if (data.practices) {
            storage.set(STORAGE_KEYS.PRACTICES, data.practices)
          }
          
          resolve(data)
        } catch (importError) {
          // Restore backup on error
          storage.set(STORAGE_KEYS.BLOG_POSTS, currentBlogs)
          storage.set(STORAGE_KEYS.PRACTICES, currentPractices)
          reject(new Error('Ошибка импорта: ' + importError.message))
        }
      } catch (error) {
        console.error('JSON parse error:', error);
        reject(new Error('Ошибка чтения файла: неверный JSON'))
      }
    }
    
    reader.onerror = () => {
      reject(new Error('Ошибка чтения файла'))
    }
    
    reader.readAsText(file)
  })
}

// Initialize storage with demo data if empty
export const initializeStorage = () => {
  const blogs = storage.get(STORAGE_KEYS.BLOG_POSTS)
  const practices = storage.get(STORAGE_KEYS.PRACTICES)
  
  if (!blogs || blogs.length === 0) {
    const demoBlog = {
      id: fileUtils.generateUniqueId(),
      title: 'Добро пожаловать в админ-панель блога',
      slug: 'dobro-pozhalovat-v-admin-panel-bloga',
      excerpt: 'Это демонстрационная статья для показа возможностей админ-панели.',
      content: '<p>Добро пожаловать в админ-панель управления блогом!</p><p>Здесь вы можете создавать, редактировать и управлять статьями блога.</p>',
      author: 'Администратор',
      category: 'Тантра',
      tags: ['админ', 'блог', 'добро пожаловать'],
      status: 'published',
      featured: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    storage.set(STORAGE_KEYS.BLOG_POSTS, [demoBlog])
  }
  
  if (!practices || practices.length === 0) {
    const demoPractice = {
      id: fileUtils.generateUniqueId(),
      title: 'Демонстрационная практика',
      slug: 'demonstratsionnaya-praktika',
      description: 'Это демонстрационная практика для показа возможностей админ-панели.',
      content: '<p>Добро пожаловать в админ-панель управления практиками!</p><p>Здесь вы можете создавать, редактировать и управлять описаниями практик.</p>',
      type: 'Групповая практика',
      level: 'Все уровни',
      duration: '2 часа',
      price: 2000,
      location: 'Москва, центр',
      instructor: 'Демо-инструктор',
      status: 'published',
      featured: true,
      tags: ['демо', 'практика'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    storage.set(STORAGE_KEYS.PRACTICES, [demoPractice])
  }
}

// Initialize on module load
if (typeof window !== 'undefined') {
  initializeStorage()
}