import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'//tiene contra parte html
})

export class ContadorComponent{

    public titulo: string  = 'Contador App';
    public numero: number = 10;
    //Nombre del proyecto bases

    public base: number =5;

    sumar(){//this para hacer referencia a la propiedad de la clase
        this.numero+=1;
    }

    restar(){//this para hacer referencia a la propiedad de la clase
        this.numero-=1;
    }

    acumular(valor: number ){
        this.numero +=valor;
    }
}