const components = document.querySelectorAll('.component');
const categories = document.querySelectorAll('.category');

components.forEach(component => {
    component.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

categories.forEach(category => {
    category.addEventListener('dragover', e => {
        e.preventDefault();
    });

    category.addEventListener('drop', e => {
        e.preventDefault();
        const componentId = e.dataTransfer.getData('text/plain');
        const categoryId = e.target.id;

        if (categoryId === `category-${componentId}`) {
            const component = document.getElementById(componentId);
            component.style.backgroundColor = 'lightgreen';
            component.draggable = false;
        }
    });
});


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const notificationSound = document.getElementById('notification-sound');
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    notificationSound.play();
  })
}