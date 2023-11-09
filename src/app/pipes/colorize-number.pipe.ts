import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorizeNumber',
})
export class ColorizeNumberPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null): SafeHtml {
    if (!value || value === '' || value === null) {
      return '';
    }
    const numberValue = Number(value);
    const coloredNumber =
      numberValue >= 0
        ? `<span class="text-green">${value}</span>`
        : `<span class="text-red">${value}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(coloredNumber);
  }
}
