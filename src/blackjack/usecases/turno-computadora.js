
import { pedirCarta, valorCarta, crearCartaHTML}  from './';


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para monstrar los puntos
 * @param {HTMLElement} divCartasComputadora elementos HTML para monstrar las cartas
 * @param {Array<string>} deck  
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario ');
    

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        // TODO: Crear carta 
        const imgCarta = crearCartaHTML( carta, )

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
