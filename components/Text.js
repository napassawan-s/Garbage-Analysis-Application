import React from 'react';
//import * as NativeElement from 'react-native-elements';

const Text = (props) => {
    let fontStyle = 'Montserrat';
    if (props.style != undefined) {
        if (props.style.fontWeight != null) {
            switch (props.style.fontWeight) {
                case '100': case 'thin': fontStyle = 'MontserratThin'; break;
                case '200': case 'extra-light': fontStyle = 'MontserratExtraLight'; break;
                case '300': case 'light': fontStyle = 'MontserratLight'; break;
                case '400': case 'normal': fontStyle = 'Montserrat'; break;
                case '500': case 'medium': fontStyle = 'MontserratMedium'; break;
                case '600': case 'semi-bold': fontStyle = 'MontserratSemiBold'; break;
                case '700': case 'bold': fontStyle = 'MontserratBold'; break;
                case '800': case 'extra-bold': fontStyle = 'MontserratExtraBold'; break;
                case '900': case 'black': fontStyle = 'MontserratBlack'; break;
            }
            delete props.style['fontWeight'];
        }
    }

    return (
        <NativeElement.Text style={[{ fontFamily: fontStyle, color: 'white' }, props.style]}>{props.children}</NativeElement.Text>
    )
}

export { Text };