
const {createApp}=Vue;
const { DateTime }= luxon;

createApp({
    data(){
        return{
            immagineAttuale:0,
            messaggio:"",
            ricerca:"",
            personaSingola:"",
            now:"",
            now: DateTime.now(),
            // classi css
            bg_contatto:"bg-li",

            classeMesMandati:"messaggiMandati",
            classeMesRicevuti:"messaggiRicevuti",

            // contatti dell'utente
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/th (2).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/th (3).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/th.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/th (4).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/th (5).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/th (1).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/th (6).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/th (7).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }
    },
    methods:{
        // funzione per prendere l'i del contatto nel tag contatti persone
        visualizzazineMessaggi(index){
            this.immagineAttuale=index
            // ciclo per risettare la proprieta a bg_display false 
            this.contacts.forEach(element => {
                element.bg_display=true
            });
            // cambio del valore della proprieta cosi che si veda il bg della chat selezionata 
            this.contacts[this.immagineAttuale].bg_display=false
        },
        // funzione per inviare un mesaggio e ottenere la risposta
        invioMessaggio(){
            this.personaSingola =this.contacts[this.immagineAttuale].messages


            this.now = DateTime.now();

            // console.log(now.c.hour);
            // console.log(now.c.minute);

            // invio messaggio dentro array messages
           this.personaSingola.push({"message":this.messaggio,"status":"sent", "time":this.now.c.hour +":" + this.now.c.minute })
           this.messaggio=""
        //    messaggio di risposta
           setTimeout(() => {
            this.personaSingola.push({"message":"ok","status":"received", "time":this.now.c.hour +":" + this.now.c.minute})
           }, 1000);
        },
        autocomplete(nomeRicerca){
            for (let i = 0; i < this.contacts.length; i++) {
                // const reg = new RegExp(nomeRicerca);
                if (this.contacts[i].name.match(nomeRicerca) ) {
                    this.contacts[i].visible=true
                 }else{
                    this.contacts[i].visible=false
                 }
            }
        }

    },
    mounted(){
        // cambio del valore dentro contacts data con scritto solo ore e minuti
             for (let i = 0; i < this.contacts.length; i++) {
                this.personaSingola=this.contacts[i].messages;

                // aggiunta nuova classe per bg chat
                this.contacts[i].bg_display=true

                // console.log(this.contacts[i].bg_display);


                // console.log(this.contacts[i]);
                    for (let y = 0; y < this.personaSingola.length; y++) {
                        // creazione della nuova chiave e messa dentro all'oggetto personaSingola
                     this.now= this.personaSingola[y].date
                    this.now=this.now.substr(10 );
                    this.now=this.now.substr(0,6);
                    this.personaSingola[y].time=this.now
                    // console.log(personaSingola[y]);

                    }
            }
            // ipostazione ch permette di far vedere i bg della chat evidenziata nella rubrica
            this.contacts[this.immagineAttuale].bg_display=false
    },

}).mount("#app")

// Il metodo match() di JavaScript mi permette di cercare delle corrispondenze
//  in una stringa tramite una espressione regolare.