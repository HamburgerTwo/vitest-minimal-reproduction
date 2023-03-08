import type { IWindow } from 'happy-dom';
import { beforeEach, describe, it, vi, expect } from 'vitest';
import '~/elements/my-element';

describe('Button with increment', async () => {
  beforeEach(async () => {
    document.body.innerHTML = '<my-element></my-element>';
    await (window as unknown as IWindow).happyDOM.whenAsyncComplete();
  });

  it('should have style', () => {
    expect(getComputedStyle(document.body.querySelector('my-element')?.shadowRoot?.querySelector('a')).color).toEqual(
      'red'
    );
  });
});
