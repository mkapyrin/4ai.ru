#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Скрипт для автоматической инкрементации версии при деплое
 *
 * Использование:
 * node scripts/increment-version.js [patch|minor|major]
 *
 * Примеры:
 * node scripts/increment-version.js patch  # 1.11.0 → 1.11.1
 * node scripts/increment-version.js minor  # 1.11.0 → 1.12.0
 * node scripts/increment-version.js major  # 1.11.0 → 2.0.0
 */

function incrementVersion(currentVersion, type = 'patch') {
  const parts = currentVersion.split('.').map(Number);

  if (parts.length !== 3) {
    throw new Error('Неверный формат версии. Ожидается: major.minor.patch');
  }

  const [major, minor, patch] = parts;

  switch (type) {
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'major':
      return `${major + 1}.0.0`;
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

function updateVersionInFooter(newVersion) {
  const footerPath = path.join(__dirname, '..', 'src', 'components', 'Footer.tsx');

  if (!fs.existsSync(footerPath)) {
    throw new Error('Footer.tsx не найден');
  }

  let content = fs.readFileSync(footerPath, 'utf8');
  const oldVersion = content.match(/const siteVersion = '([^']+)'/)?.[1];

  if (!oldVersion) {
    throw new Error('Не найдена текущая версия в Footer.tsx');
  }

  console.log(`📈 Обновление версии: ${oldVersion} → ${newVersion}`);
  content = content.replace(
    `const siteVersion = '${oldVersion}'`,
    `const siteVersion = '${newVersion}'`
  );

  fs.writeFileSync(footerPath, content);
  console.log(`✅ Версия обновлена в Footer.tsx`);
}

function main() {
  const args = process.argv.slice(2);
  const incrementType = args[0] || 'patch';

  const validTypes = ['patch', 'minor', 'major'];
  if (!validTypes.includes(incrementType)) {
    console.error(`❌ Неверный тип инкремента: ${incrementType}`);
    console.error(`📝 Используйте: ${validTypes.join(', ')}`);
    process.exit(1);
  }

  try {
    // Читаем текущую версию из Footer.tsx
    const footerPath = path.join(__dirname, '..', 'src', 'components', 'Footer.tsx');
    const content = fs.readFileSync(footerPath, 'utf8');
    const currentVersion = content.match(/const siteVersion = '([^']+)'/)?.[1];

    if (!currentVersion) {
      throw new Error('Не найдена текущая версия в Footer.tsx');
    }

    console.log(`🔍 Текущая версия: ${currentVersion}`);
    console.log(`⬆️ Тип инкремента: ${incrementType}`);

    // Вычисляем новую версию
    const newVersion = incrementVersion(currentVersion, incrementType);
    console.log(`🎯 Новая версия: ${newVersion}`);

    // Обновляем Footer.tsx
    updateVersionInFooter(newVersion);

    // Обновляем Service Worker (если есть)
    const swPath = path.join(__dirname, '..', 'public', 'sw.js');
    if (fs.existsSync(swPath)) {
      let swContent = fs.readFileSync(swPath, 'utf8');
      swContent = swContent.replace(
        /const CACHE_NAME = '[^']+'/,
        `const CACHE_NAME = '4ai-ru-v${newVersion}'`
      );
      swContent = swContent.replace(
        /const STATIC_CACHE = '[^']+'/,
        `const STATIC_CACHE = 'static-v${newVersion}'`
      );
      swContent = swContent.replace(
        /const DYNAMIC_CACHE = '[^']+'/,
        `const DYNAMIC_CACHE = 'dynamic-v${newVersion}'`
      );
      fs.writeFileSync(swPath, swContent);
      console.log(`✅ Service Worker обновлен`);
    }

    console.log(`🎉 Версия успешно обновлена до ${newVersion}!`);
    console.log(`📦 Готово к коммиту и деплою`);

  } catch (error) {
    console.error(`❌ Ошибка: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { incrementVersion, updateVersionInFooter };
