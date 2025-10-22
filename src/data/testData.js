// Улучшенные данные для тантрического теста личности

export const genderQuestion = {
  id: 0,
  text: "Укажите ваш пол для более точного результата:",
  type: "single",
  answers: [
    { text: "Мужской", value: "male" },
    { text: "Женский", value: "female" },
    { text: "Предпочитаю не указывать", value: "other" }
  ]
};

export const questions = [
  {
    id: 1,
    text: "Какие виды деятельности вас больше всего привлекают? (выберите до 3 вариантов)",
    type: "multiple",
    maxChoices: 3,
    answers: [
      { 
        text: "Активный спорт и физические нагрузки", 
        points: { warrior: 2, guardian: 1, creator: 0, sage: 0, healer: 0, mystic: 0 } 
      },
      { 
        text: "Творческие проекты и искусство", 
        points: { warrior: 0, guardian: 0, creator: 3, sage: 1, healer: 1, mystic: 1 } 
      },
      { 
        text: "Помощь и поддержка других людей", 
        points: { warrior: 0, guardian: 2, creator: 0, sage: 1, healer: 3, mystic: 1 } 
      },
      { 
        text: "Изучение нового и саморазвитие", 
        points: { warrior: 1, guardian: 1, creator: 1, sage: 3, healer: 1, mystic: 2 } 
      },
      { 
        text: "Медитация и духовные практики", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 2, healer: 2, mystic: 3 } 
      },
      { 
        text: "Организация и планирование", 
        points: { warrior: 1, guardian: 3, creator: 0, sage: 2, healer: 1, mystic: 0 } 
      }
    ]
  },
  {
    id: 2,
    text: "В отношениях для вас наиболее важны: (выберите до 2 вариантов)",
    type: "multiple",
    maxChoices: 2,
    answers: [
      { 
        text: "Страсть и интенсивность переживаний", 
        points: { warrior: 3, guardian: 0, creator: 2, sage: 0, healer: 1, mystic: 1 } 
      },
      { 
        text: "Стабильность и надежность", 
        points: { warrior: 1, guardian: 3, creator: 0, sage: 2, healer: 2, mystic: 0 } 
      },
      { 
        text: "Творческое вдохновение и рост", 
        points: { warrior: 0, guardian: 0, creator: 3, sage: 2, healer: 1, mystic: 2 } 
      },
      { 
        text: "Глубокое понимание и эмпатия", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 1, healer: 3, mystic: 2 } 
      },
      { 
        text: "Духовная близость и единение", 
        points: { warrior: 1, guardian: 0, creator: 1, sage: 1, healer: 2, mystic: 3 } 
      },
      { 
        text: "Интеллектуальная совместимость", 
        points: { warrior: 0, guardian: 2, creator: 2, sage: 3, healer: 1, mystic: 1 } 
      }
    ]
  },
  {
    id: 3,
    text: "Как вы предпочитаете справляться со стрессом? (выберите подходящие варианты)",
    type: "multiple",
    maxChoices: 3,
    answers: [
      { 
        text: "Активные физические упражнения", 
        points: { warrior: 3, guardian: 1, creator: 0, sage: 0, healer: 1, mystic: 0 } 
      },
      { 
        text: "Творческое самовыражение", 
        points: { warrior: 0, guardian: 0, creator: 3, sage: 1, healer: 2, mystic: 1 } 
      },
      { 
        text: "Общение с близкими людьми", 
        points: { warrior: 1, guardian: 2, creator: 1, sage: 1, healer: 3, mystic: 1 } 
      },
      { 
        text: "Анализ ситуации и поиск решений", 
        points: { warrior: 1, guardian: 3, creator: 1, sage: 3, healer: 1, mystic: 1 } 
      },
      { 
        text: "Медитация и дыхательные практики", 
        points: { warrior: 0, guardian: 1, creator: 2, sage: 2, healer: 2, mystic: 3 } 
      },
      { 
        text: "Уединение и время наедине с собой", 
        points: { warrior: 0, guardian: 1, creator: 2, sage: 2, healer: 1, mystic: 3 } 
      }
    ]
  },
  {
    id: 4,
    text: "Какие качества в себе вы хотели бы развить? (выберите до 3 вариантов)",
    type: "multiple",
    maxChoices: 3,
    answers: [
      { 
        text: "Решительность и лидерские качества", 
        points: { warrior: 3, guardian: 2, creator: 1, sage: 1, healer: 0, mystic: 0 } 
      },
      { 
        text: "Терпение и стабильность", 
        points: { warrior: 0, guardian: 3, creator: 0, sage: 2, healer: 2, mystic: 1 } 
      },
      { 
        text: "Креативность и вдохновение", 
        points: { warrior: 1, guardian: 0, creator: 3, sage: 1, healer: 1, mystic: 2 } 
      },
      { 
        text: "Мудрость и глубокое понимание", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 3, healer: 2, mystic: 2 } 
      },
      { 
        text: "Сострадание и способность исцелять", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 1, healer: 3, mystic: 2 } 
      },
      { 
        text: "Интуицию и духовную чувствительность", 
        points: { warrior: 0, guardian: 0, creator: 2, sage: 2, healer: 2, mystic: 3 } 
      }
    ]
  },
  {
    id: 5,
    text: "В группе людей вы чаще всего: (выберите 1-2 варианта)",
    type: "multiple",
    maxChoices: 2,
    answers: [
      { 
        text: "Берете инициативу и ведете за собой", 
        points: { warrior: 3, guardian: 2, creator: 1, sage: 1, healer: 0, mystic: 0 } 
      },
      { 
        text: "Поддерживаете порядок и организуете процесс", 
        points: { warrior: 1, guardian: 3, creator: 0, sage: 2, healer: 1, mystic: 0 } 
      },
      { 
        text: "Предлагаете креативные идеи", 
        points: { warrior: 1, guardian: 0, creator: 3, sage: 2, healer: 1, mystic: 1 } 
      },
      { 
        text: "Даете мудрые советы", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 3, healer: 2, mystic: 2 } 
      },
      { 
        text: "Поддерживаете и утешаете других", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 1, healer: 3, mystic: 1 } 
      },
      { 
        text: "Наблюдаете и чувствуете атмосферу", 
        points: { warrior: 0, guardian: 0, creator: 2, sage: 2, healer: 2, mystic: 3 } 
      }
    ]
  },
  {
    id: 6,
    text: "Что вас больше всего вдохновляет в жизни? (выберите до 3 вариантов)",
    type: "multiple",
    maxChoices: 3,
    answers: [
      { 
        text: "Достижение амбициозных целей", 
        points: { warrior: 3, guardian: 2, creator: 1, sage: 1, healer: 0, mystic: 0 } 
      },
      { 
        text: "Создание чего-то прекрасного", 
        points: { warrior: 0, guardian: 0, creator: 3, sage: 1, healer: 2, mystic: 2 } 
      },
      { 
        text: "Помощь в решении проблем других", 
        points: { warrior: 1, guardian: 2, creator: 0, sage: 2, healer: 3, mystic: 1 } 
      },
      { 
        text: "Познание истины и мудрости", 
        points: { warrior: 0, guardian: 1, creator: 1, sage: 3, healer: 1, mystic: 3 } 
      },
      { 
        text: "Гармония и красота в отношениях", 
        points: { warrior: 0, guardian: 2, creator: 2, sage: 1, healer: 3, mystic: 2 } 
      },
      { 
        text: "Духовные открытия и трансформация", 
        points: { warrior: 1, guardian: 0, creator: 2, sage: 2, healer: 2, mystic: 3 } 
      }
    ]
  }
];

// Расширенные архетипы с учетом пола
export const archetypes = {
  warrior: {
    male: {
      name: "Тантрический Воин",
      emoji: "⚔️",
      color: "from-red-600 to-orange-600",
      shortDescription: "Сила действия и трансформации"
    },
    female: {
      name: "Воительница Света",
      emoji: "🗡️",
      color: "from-red-500 to-pink-500",
      shortDescription: "Огненная сила и решимость"
    },
    other: {
      name: "Огненный Трансформатор",
      emoji: "🔥",
      color: "from-red-500 to-orange-500",
      shortDescription: "Энергия перемен и действия"
    },
    description: `Вы обладаете мощной трансформирующей энергией и способностью к решительным действиям. Ваша сила заключается в умении преодолевать препятствия и вести других за собой. В тантре вы представляете активный принцип, способный к глубоким изменениям через действие и волю.`,
    
    strengths: [
      "Лидерские качества и харизма",
      "Способность к быстрым решениям",
      "Высокая мотивация и целеустремленность",
      "Умение вдохновлять других"
    ],
    
    challenges: [
      "Склонность к импульсивности",
      "Нетерпеливость с медленными процессами",
      "Риск выгорания от чрезмерной активности",
      "Сложности с принятием критики"
    ],
    
    practices: [
      "Динамические медитации",
      "Дыхательные практики для трансформации энергии",
      "Боевые искусства и активные движения",
      "Практики осознанного лидерства"
    ],
    
    suitableService: {
      name: "Интенсивные групповые практики",
      description: "Мощные трансформационные сессии для активных натур",
      price: "3500 ₽"
    }
  },

  guardian: {
    male: {
      name: "Мудрый Хранитель",
      emoji: "🛡️",
      color: "from-green-600 to-emerald-600",
      shortDescription: "Стабильность и защита"
    },
    female: {
      name: "Земная Мать",
      emoji: "🌍",
      color: "from-green-500 to-teal-500",
      shortDescription: "Забота и плодородие"
    },
    other: {
      name: "Земной Страж",
      emoji: "🌱",
      color: "from-green-500 to-emerald-500",
      shortDescription: "Стабильность и рост"
    },
    description: `Вы - надежная опора для окружающих, обладающая природной мудростью и способностью создавать безопасное пространство. Ваша сила в терпении, последовательности и глубоком понимании естественных ритмов жизни. В тантре вы представляете принцип стабильности и заземления.`,
    
    strengths: [
      "Надежность и постоянство",
      "Практическая мудрость",
      "Способность к долгосрочному планированию",
      "Умение создавать безопасность для других"
    ],
    
    challenges: [
      "Сопротивление изменениям",
      "Чрезмерная осторожность",
      "Склонность к консерватизму",
      "Медлительность в принятии решений"
    ],
    
    practices: [
      "Заземляющие медитации",
      "Работа с природными ритмами",
      "Телесные практики и массаж",
      "Ритуалы изобилия и благодарности"
    ],
    
    suitableService: {
      name: "Регулярные групповые занятия",
      description: "Постепенное и глубокое развитие в стабильной группе",
      price: "2500 ₽"
    }
  },

  creator: {
    male: {
      name: "Творец Миров",
      emoji: "🎨",
      color: "from-purple-600 to-blue-600",
      shortDescription: "Вдохновение и созидание"
    },
    female: {
      name: "Муза Творчества",
      emoji: "🦋",
      color: "from-purple-500 to-pink-500",
      shortDescription: "Красота и вдохновение"
    },
    other: {
      name: "Воздушный Творец",
      emoji: "✨",
      color: "from-purple-500 to-blue-500",
      shortDescription: "Свобода и креативность"
    },
    description: `Вы обладаете уникальной способностью видеть красоту и создавать новое. Ваша сила в творческом самовыражении, вдохновении и способности трансформировать обыденное в прекрасное. В тантре вы представляете принцип творческой энергии и свободы.`,
    
    strengths: [
      "Творческое мышление и вдохновение",
      "Способность видеть красоту во всем",
      "Гибкость и адаптивность",
      "Умение вдохновлять других"
    ],
    
    challenges: [
      "Склонность к непостоянству",
      "Сложности с рутиной и дисциплиной",
      "Чрезмерная чувствительность",
      "Проблемы с завершением проектов"
    ],
    
    practices: [
      "Творческие медитации",
      "Танцевальные и двигательные практики",
      "Работа с голосом и звуком",
      "Визуализации и работа с образами"
    ],
    
    suitableService: {
      name: "Творческие мастерские",
      description: "Исследование тантры через искусство и самовыражение",
      price: "4000 ₽"
    }
  },

  sage: {
    male: {
      name: "Мудрый Учитель",
      emoji: "📚",
      color: "from-indigo-600 to-purple-600",
      shortDescription: "Знание и понимание"
    },
    female: {
      name: "Мудрая Наставница",
      emoji: "🔮",
      color: "from-indigo-500 to-purple-500",
      shortDescription: "Интуитивная мудрость"
    },
    other: {
      name: "Искатель Истины",
      emoji: "🧙",
      color: "from-indigo-500 to-purple-500",
      shortDescription: "Глубокое познание"
    },
    description: `Вы стремитесь к глубокому пониманию жизни и обладаете природной мудростью. Ваша сила в способности видеть суть вещей, анализировать и передавать знания другим. В тантре вы представляете принцип мудрости и осознанности.`,
    
    strengths: [
      "Глубокое понимание и анализ",
      "Способность к обучению и передаче знаний",
      "Терпение и вдумчивость",
      "Умение видеть долгосрочные перспективы"
    ],
    
    challenges: [
      "Склонность к чрезмерному анализу",
      "Сложности с принятием эмоциональных решений",
      "Перфекционизм",
      "Отстраненность от практических дел"
    ],
    
    practices: [
      "Медитации осознанности",
      "Изучение философии тантры",
      "Практики самонаблюдения",
      "Работа с мантрами и текстами"
    ],
    
    suitableService: {
      name: "Философские семинары",
      description: "Глубокое изучение теории и философии тантры",
      price: "3000 ₽"
    }
  },

  healer: {
    male: {
      name: "Целитель Сердец",
      emoji: "💚",
      color: "from-teal-600 to-blue-600",
      shortDescription: "Исцеление и сострадание"
    },
    female: {
      name: "Богиня Исцеления",
      emoji: "🌊",
      color: "from-teal-500 to-blue-500",
      shortDescription: "Любовь и восстановление"
    },
    other: {
      name: "Водный Целитель",
      emoji: "💧",
      color: "from-teal-500 to-blue-500",
      shortDescription: "Эмоциональное исцеление"
    },
    description: `Вы обладаете природным даром исцеления и глубокой эмпатией. Ваша сила в способности чувствовать других, создавать атмосферу безопасности и помогать в эмоциональном восстановлении. В тантре вы представляете принцип любви и исцеления.`,
    
    strengths: [
      "Глубокая эмпатия и сострадание",
      "Способность к эмоциональному исцелению",
      "Интуитивное понимание других",
      "Умение создавать атмосферу доверия"
    ],
    
    challenges: [
      "Склонность к эмоциональному поглощению",
      "Сложности с установлением границ",
      "Тенденция к самопожертвованию",
      "Чрезмерная чувствительность к критике"
    ],
    
    practices: [
      "Практики эмоционального исцеления",
      "Работа с энергетическими границами",
      "Медитации любящей доброты",
      "Целительские техники и массаж"
    ],
    
    suitableService: {
      name: "Индивидуальные исцеляющие сессии",
      description: "Персональная работа для глубокого эмоционального исцеления",
      price: "8000 ₽"
    }
  },

  mystic: {
    male: {
      name: "Мистический Провидец",
      emoji: "🌟",
      color: "from-violet-600 to-purple-600",
      shortDescription: "Духовное видение"
    },
    female: {
      name: "Жрица Тайн",
      emoji: "🌙",
      color: "from-violet-500 to-purple-500",
      shortDescription: "Интуитивная мудрость"
    },
    other: {
      name: "Духовный Искатель",
      emoji: "🔯",
      color: "from-violet-500 to-purple-500",
      shortDescription: "Трансцендентное познание"
    },
    description: `Вы обладаете особой духовной чувствительностью и способностью к трансцендентному познанию. Ваша сила в интуиции, способности видеть скрытые связи и глубоком понимании духовных измерений жизни. В тантре вы представляете принцип мистического единения.`,
    
    strengths: [
      "Развитая интуиция и духовная чувствительность",
      "Способность к глубоким медитативным состояниям",
      "Понимание символов и скрытых смыслов",
      "Умение видеть целостную картину"
    ],
    
    challenges: [
      "Сложности с практическими задачами",
      "Склонность к уходу от реальности",
      "Чрезмерная чувствительность к энергиям",
      "Проблемы с заземлением"
    ],
    
    practices: [
      "Глубокие медитативные практики",
      "Работа с энергетическими центрами",
      "Ритуалы и церемонии",
      "Практики единения и трансценденции"
    ],
    
    suitableService: {
      name: "Духовные ретриты",
      description: "Глубокие практики для духовного развития и трансформации",
      price: "12000 ₽"
    }
  }
};

// Функция для определения архетипа с учетом пола
export function calculateArchetype(answers, gender = 'other') {
  const scores = { warrior: 0, guardian: 0, creator: 0, sage: 0, healer: 0, mystic: 0 };
  
  answers.forEach(answerSet => {
    if (Array.isArray(answerSet)) {
      // Множественный выбор
      answerSet.forEach(answer => {
        Object.keys(answer.points).forEach(archetype => {
          scores[archetype] += answer.points[archetype];
        });
      });
    } else {
      // Одиночный выбор
      Object.keys(answerSet.points).forEach(archetype => {
        scores[archetype] += answerSet.points[archetype];
      });
    }
  });
  
  // Находим архетип с максимальным количеством баллов
  const maxScore = Math.max(...Object.values(scores));
  const dominantArchetype = Object.keys(scores).find(key => scores[key] === maxScore);
  
  const baseArchetype = archetypes[dominantArchetype];
  const genderSpecific = baseArchetype[gender] || baseArchetype.other;
  
  return {
    primary: dominantArchetype,
    scores: scores,
    archetype: {
      ...baseArchetype,
      ...genderSpecific
    }
  };
}

// Тексты для шеринга в социальных сетях
export const shareTexts = {
  warrior: "Я прошел тантрический тест и оказался Воином! ⚔️ А какой у вас архетип?",
  guardian: "Мой тантрический архетип - Хранитель! 🛡️ Пройдите тест и узнайте свой!",
  creator: "Я - Творец по результатам тантрического теста! 🎨 А вы?",
  sage: "Тест показал, что я Мудрец! 📚 Узнайте свой тантрический архетип!",
  healer: "Мой архетип - Целитель! 💚 Какой результат получится у вас?",
  mystic: "Я оказался Мистиком в тантрическом тесте! 🌟 Пройдите и вы!"
};
