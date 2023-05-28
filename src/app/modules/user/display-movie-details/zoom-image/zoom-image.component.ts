import { Component, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomImage]'
})

export class ZoomImageComponent {
  private zoomWidth = 200;
  private zoomHeight = 200;
  private zoom: HTMLElement | null;

  constructor(private el: ElementRef) {
    this.zoom = null;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Lấy kích thước của phần tử hình ảnh
    const rect = this.el.nativeElement.getBoundingClientRect();
  
    // Lấy kích thước và vị trí của phần tử cha chứa hình ảnh
    const parentRect = this.el.nativeElement.parentNode.getBoundingClientRect();
    const imgLeft = parentRect.left;
    const imgTop = parentRect.top;
  
    // Tính toán vị trí mới cho phần tử zoom
    const mouseX = event.pageX - imgLeft;
    const mouseY = event.pageY - imgTop;
    const zoomX = mouseX;
    const zoomY = mouseY;
  
    // Tính tỷ lệ để tính toán kích thước của phần zoom
    const ratioX = rect.width / this.zoomWidth;
    const ratioY = rect.height / this.zoomHeight;
  
    // Cập nhật vị trí và kích thước cho phần zoom
    if (this.zoom) {
      this.zoom.style.left = `${mouseX}px`;
      this.zoom.style.top = `${mouseY}px`;
      this.zoom.style.backgroundPosition = `-${zoomX * ratioX}px -${zoomY * ratioY}px`;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // Tạo phần tử để hiển thị phần zoom
    this.zoom = document.createElement('div');
    this.zoom.style.width = `${this.zoomWidth}px`;
    this.zoom.style.height = `${this.zoomHeight}px`;
    this.zoom.style.position = 'absolute';
    this.zoom.style.background = `url(${this.el.nativeElement.src}) no-repeat`;
    this.zoom.style.backgroundSize = `${this.el.nativeElement.width * 2}px ${this.el.nativeElement.height * 2}px`;
    this.zoom.style.pointerEvents = 'none';
    this.zoom.style.border = '1px solid #ccc';
    this.zoom.style.zIndex = '999';

    // Thêm phần tử vào DOM
    this.el.nativeElement.parentNode.appendChild(this.zoom);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Xóa phần tử zoom khi rời khỏi hình ảnh
    if (this.zoom && this.zoom.parentNode) {
      this.zoom.parentNode.removeChild(this.zoom);
      this.zoom = null;
    }
  }
}
