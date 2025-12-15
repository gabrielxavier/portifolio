export function useScroll() {
  function scrollToTarget(target: HTMLElement) {
    var element = target
    var headerOffset = 104
    var elementPosition = element.getBoundingClientRect().top
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return {
    scrollToTarget
  }
}
