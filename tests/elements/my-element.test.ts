import type { IWindow } from 'happy-dom';
import { beforeEach, describe, it, vi, expect } from 'vitest';
import '~/elements/my-element';
import { nextTick } from '../utils';

describe('Button with increment', async () => {
  beforeEach(async () => {
    document.body.innerHTML = '<my-element name="World"></my-element>';
    await (window as unknown as IWindow).happyDOM.whenAsyncComplete();
    await nextTick();
  });

  function getInsideButton(): HTMLElement | null | undefined {
    return document.body.querySelector('my-element')?.shadowRoot?.querySelector('button');
  }

  it('should increment the count on each click', async () => {
    getInsideButton()?.click();
    await nextTick();
    expect(getInsideButton()?.innerText).toContain('1');
  });

  it('should show name props', () => {
    getInsideButton();
    expect(document.body.querySelector('my-element')?.shadowRoot?.innerHTML).toContain('World');
  });

  it('should dispatch count event on button click', () => {
    const spyClick = vi.fn();

    document.querySelector('my-element')?.addEventListener('count', spyClick);

    getInsideButton()?.click();

    expect(spyClick).toHaveBeenCalled();
  });
});