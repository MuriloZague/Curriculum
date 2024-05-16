const chk = document.getElementById('chk');

// Verifica o estado do tema salvo no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark') {
    chk.checked = true;
  }
  applyDarkMode(currentTheme === 'dark');
}

// Adiciona um listener para o evento de mudança do checkbox
chk.addEventListener('change', () => {
  const isDark = chk.checked;
  applyDarkMode(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function applyDarkMode(isDark) {
  const elementsToToggle = [
    
    document.body,
    document.getElementById('hi'),
    document.getElementById('apresentacao1'),
    document.getElementById('dev'),
    document.querySelector('img'),
    ...document.querySelectorAll('variaveis'),
    document.querySelector('sis'),
    ...document.querySelectorAll('.link'),
    document.querySelector('label'),
    document.getElementById('ball')
    
  ];

  elementsToToggle.forEach(element => {
    if (element) {
      element.classList.toggle('dark', isDark);
    }
  });

  updateImageColor();
}

function updateImageColor() {
  const isDarkMode = document.body.classList.contains('dark');
  const darkImages = document.querySelectorAll('.profile-image-dark');
  const lightImages = document.querySelectorAll('.profile-image-light');

  if (isDarkMode) {
    lightImages.forEach(image => image.style.display = 'block');
    darkImages.forEach(image => image.style.display = 'none');
  } else {
    lightImages.forEach(image => image.style.display = 'none');
    darkImages.forEach(image => image.style.display = 'block');
  }
}
