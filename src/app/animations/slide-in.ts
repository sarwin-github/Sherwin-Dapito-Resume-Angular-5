import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const slideIn = trigger('slideIn', [
    state('in', style({height: '*', opacity: 0})),
    transition(':leave', [
        style({height: '*', opacity: 1}),

        group([
            animate(300, style({height: 0})),
            animate('300ms ease-in-out', style({'opacity': '0'}))
        ])

    ]),
    transition(':enter', [
        style({height: '0', opacity: 0}),

        group([
            animate(300, style({height: '*'})),
            animate('400ms ease-in-out', style({'opacity': '1'}))
        ])

    ])
]);