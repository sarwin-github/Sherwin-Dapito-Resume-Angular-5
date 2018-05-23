import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const fadeInFrom = trigger('fadeInFrom', [
  state('show', style({
    opacity: 1,
  })),
  state('hide',   style({
    opacity: 0,
  })),
  transition('show => hide', animate('700ms ease-out')),
  transition('hide => show', animate('700ms ease-in'))
]);
