const profile = {
  fullName: 'Ujwal P',
  description: 'Software Engineer',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.jpeg',
  about: {
    title: `Hey There! 
    I'm Ujwal P`,
    description: `I'm passionate Network developer having an experience of different networking features with C/C++ development on linux kernel, FRR, DPDK. 
    In my free time, I love to spend time with my pets, Hima (Cat) and Oreo (Dog), tinker with IOT and learn science.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Bengaluru, India',
        url: 'https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@sudokude',
        url: 'https://twitter.com/sudokude',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'ujwalp09@gmail.com',
        url: 'mailto://ujwalp09@gmail.com',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'github',
        text: '@ujwalp15',
        url: 'https://github.com/ujwalp15',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    {
      iconName: 'github',
      url: 'https://github.com/ujwalp15',
      text: "ujwalp15",
      hoverColor: '#000'
    },
    {
      iconName: 'instagram',
      url: 'https://instagram.com/sudokude',
      text: "sudokude",
      hoverColor: '#000'
    },
    {
      iconName: 'twitter',
      url: 'https://twitter.com/sudokude',
      text: "sudokude",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/sudokude',
      text: "sudokude",
      hoverColor: '#0088cc'
    },
    
    {
      iconName: 'email',
      url: 'mailto:ujwalp09@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Zuko',
    img: '',
    description: 'A surveillance platform that enables end users to report fires and helps with rescue paths.',
    categories: ['TensorFlow', 'RPi 3', 'Python', 'Flutter'],
    sourceCodeUrl: 'https://github.com/NullPointersInc/Zuko-Flutter'
  },
  {
    title: 'Oculus',
    img: '',
    description: 'A smart wearable device that helps people with destitute of vision in day-to-day life.',
    categories: ['TensorFlow', 'RPi 3', 'Python', 'C'],
    sourceCodeUrl: 'https://github.com/NullPointersInc/Oculus'
  },
  {
    title: 'Meow',
    img: '',
    description: 'An app powered by TensorFlow that takes a picture of a cat and detects its breed.',
    categories: ['TensorFlow', 'Python', 'Flutter', 'Bash'],
    sourceCodeUrl: 'https://github.com/ujwalp15/meow'
  },
  {
    title: 'Bella',
    img: '',
    description: 'An assistant powered by AI and NLP that recognize command and perform tasks.',
    categories: ['AI', 'Python', 'Java', 'Json'],
    sourceCodeUrl: 'https://github.com/NullPointersInc/Bella-Android'
  },
  {
    title: 'RadeonOS',
    img: '',
    description: 'A custom rom based on AOSP(Android Open Source Project) based on Android 6.0.',
    categories: ['Makefile', 'Java', 'C', 'XML'],
    sourceCodeUrl: 'https://github.com/RadeonOS'
  },
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
