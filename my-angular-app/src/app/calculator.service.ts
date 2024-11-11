import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private currentInput = '';
  private operator: string | null = null;
  private previousValue: string | null = null;

  processInput(input: string): string {
    if (input === 'C') {
      this.reset();
      return '0';
    } else if (['+', '-', '*', '/'].includes(input)) {
      this.operator = input;
      this.previousValue = this.currentInput;
      this.currentInput = '';
      return this.previousValue;
    } else if (input === '=') {
      if (this.operator && this.previousValue) {
        const result = this.calculate(this.operator, this.previousValue, this.currentInput);
        this.reset();
        this.currentInput = result;
        return result;
      }
    } else {
      this.currentInput += input;
    }
    return this.currentInput;
  }

  private calculate(operator: string, prev: string, current: string): string {
    const prevNum = parseFloat(prev);
    const currNum = parseFloat(current);
    let result = 0;

    switch (operator) {
      case '+':
        result = prevNum + currNum;
        break;
      case '-':
        result = prevNum - currNum;
        break;
      case '*':
        result = prevNum * currNum;
        break;
      case '/':
        result = prevNum / currNum;
        break;
    }

    return result.toString();
  }

  private reset() {
    this.currentInput = '';
    this.operator = null;
    this.previousValue = null;
  }
}
