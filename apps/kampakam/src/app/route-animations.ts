import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideHome('left') ),
    transition('isLeft => *', slideHome('right') )
  ]);

  function slideHome(direction:any) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
          overflow: 'hidden',
        })
      ], optional),
      // Normalize the page style... Might not be necessary

      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
    ];
  }

  function slideTo(direction:any) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
          overflow: 'hidden',
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%',overflow:"hidden"}),

      ]),
      group([
        query(':enter', [
          animate('600ms ease', style({ [direction]: '0%', overflow:'hidden'}))
        ])
      ]),
      // Normalize the page style... Might not be necessary

      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
    ];
  }


export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate(
        '1600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);
