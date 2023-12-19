
const {createApp}=Vue;


const { DateTime }= luxon;

createApp({
    data(){
        return{
            immagineAttuale:0,
            // v-model valori
            ricerca:"",
            messaggio:"",
            personaSingola:"",
            welcomeMessage:"",
            // dati pe cambiare sfondo e font
            fontProgetto:false,
            sfondoProgetto:false,
            // classi css
            classe:"bg-li",
            classe1:"scompari",
            classe2:"font",
            classeMesMandati:"messaggi-mandati",
            classeMesRicevuti:"messaggi-ricevuti",
            // classi per sfondo dark
            classe3:"bg-pagina",
            classe4:"bg-sfondo",

            // valori per aggiungere nuovo utente
            nomeNuovoUtente:"",
            // dati inseriti dentro array contacts
            now: DateTime.now(),
            question:"",
            answer:"",

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

            // controllo se utente ha scritto qualcosa
            if (this.messaggio==="") {
                alert("scrivi qualcosa")
            }else{
                // comparsa della notifica della scritta
                this.contacts[this.immagineAttuale].scrittura="sta scrivendo"
                // invio messaggio dentro array messages
                this.personaSingola.push({"message":this.messaggio,"status":"sent", "time":this.calcoloTime() })
                this.messaggio=""
                 //    messaggio di risposta
                setTimeout(() => {
                    // risposta presa da api
                    axios.get("https://official-joke-api.appspot.com/random_joke")
                    .then((risposta)=>{
                       this.question=risposta.data.setup
                       this.answer=risposta.data.punchline
                       this.personaSingola.push({"message": this.question + " " + this.answer,"status":"received", "time":this.calcoloTime()})


                       this.contacts[this.immagineAttuale].scrittura="online"
                       setTimeout(() => {
                         this.contacts[this.immagineAttuale].scrittura=this.calcoloTime()
                       }, 2000);
                    })
                }, 1000);
            }
        },
        autocomplete(nomeRicerca){

            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.match(nomeRicerca) ) {
                    this.contacts[i].visible=true
                 }else{
                    this.contacts[i].visible=false
                 }
            }
        },
        // funzione per prendere ora e minuti attuali
        calcoloTime(){
             this.now = DateTime.now();

            // console.log(now.c.hour);
            // console.log(now.c.minute);

           return this.now.c.hour +":" + this.now.c.minute
        },
        // funzione per eliminare la chat desiderata
        deleteMessage(){
            // console.log(this.immagineAttuale);
             this.contacts[this.immagineAttuale].messages.splice(0)
        },
        // funzione per eliminare il contatto desiderato
        deleteChat(){
            // console.log(this.immagineAttuale);
            this.contacts.splice(this.immagineAttuale,1)
            // console.log(this.contacts);
        },
        // funzione per aggiungere nuovo utente
        aggiungiUtente(){
            if (this.nomeNuovoUtente===""  ){
                alert("devi scrivere un nome")
            }else{
                this.contacts.push({"name":this.nomeNuovoUtente,avatar:"img/th (2).jpg",visible: true,bg_display:true,messages:[{date: "", message: '', status: "",}]})
                this.nomeNuovoUtente="";
            }
        },
        // funzione per incrementare sfondo
        incrementoFont(){
            if (this.fontProgetto === false) {
                this.fontProgetto = true;
            }else{
                this.fontProgetto=false
            }
        },
        // funzione per cambiare il colore dello sfondo
        cambioSfondo(){
            if (this.sfondoProgetto === false) {
                this.sfondoProgetto = true;
            }else{
                this.sfondoProgetto=false
            }
           
        }
    },
    mounted(){

        // cambio del valore dentro contacts data con scritto solo ore e minuti
             for (let i = 0; i < this.contacts.length; i++) {
                this.personaSingola=this.contacts[i].messages;
                // console.log(this.contacts[i]);

                this.contacts[i].bg_display=true
                
                for (let y = 0; y < this.personaSingola.length; y++) {
                    // creazione della nuova chiave e messa dentro all'oggetto personaSingola
                this.now= this.personaSingola[y].date
                this.now=this.now.substr(10 );
                this.now=this.now.substr(0,6);
                this.personaSingola[y].time=this.now
                // console.log(personaSingola[y]);

                }
            }
            
            // ciclo per richiedere la scelta della chat
            do {
                this.welcomeMessage=parseInt(prompt(`per scegliere la chat digita un numero tra 0 e ${this.contacts.length -1}`))
                console.log(this.welcomeMessage);
            } while (this.welcomeMessage > this.contacts.length || isNaN(this.welcomeMessage) );

            this.immagineAttuale=this.welcomeMessage
            // ipostazione ch permette di far vedere i bg della chat evidenziata nella rubrica
            this.contacts[this.immagineAttuale].bg_display=false
            
            // this.contacts[0].name=this.welcomeMessage
            // console.log(this.contacts[0].name);
    },

}).mount("#app")

// Il metodo match() di JavaScript mi permette di cercare delle corrispondenze
//  in una stringa tramite una espressione regolare.


// delete this.contacts[this.immagineAttuale].messages
// delete cancella la proprietà di un oggetto



// riga 110  bg-light 35 87


// inNaN nell'if richiede tutte le volte il promp finche non ti inserirà un numero essendo che con ilparseint 
// ti deve ritornare un numero l'utente e basta se volesse scrivere una stringa uscirebbe NaN nella console