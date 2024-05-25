export function textFromLeftScript() {
    let textElements = document.querySelectorAll('.text-left');
    textElements.forEach((element) => {
        let textDistanceFromTop = element.getBoundingClientRect().top;
        if (textDistanceFromTop < (window.innerHeight * 0.7)) {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1.0';
        }
    });
}

export function textFromRightScript() {
    let textElements = document.querySelectorAll('.text-right');
    textElements.forEach((element) => {
        let textDistanceFromTop = element.getBoundingClientRect().top;
        if (textDistanceFromTop < (window.innerHeight * 0.7)) {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1.0';
        }
    });
}

export function textFromBottomScript() {
    let textElements = document.querySelectorAll('.text-bottom');
    textElements.forEach((element) => {
        let textDistanceFromTop = element.getBoundingClientRect().top;
        if (textDistanceFromTop < (window.innerHeight * 0.7)) {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1.0';
        }
    });
}