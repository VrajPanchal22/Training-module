interface Object {
    cardData:{
        [key :string]: string|number
    },
    cardLayout : {
        body : {
            id: string,
            tileComponent :string[],
            tileType:string,
            uiAction :string
        }[],
        footer :{
            menu :{
                id : string,
                isSearchable : boolean,
                subView :{
                    title:{
                        text: string
                    }
                }[],
                order :number,
                type:string,
                uiAction:string
            }[],
            orientation:string,
        }
    },
    cardUIAction:{
        action1:{
            action:string
        },
        action2:{
            action:string
        }
    },
    id:string,
    name:string
}


let object : Object={
    "cardData": {},
    "cardLayout": {
      "body": [
        {
          "id": "000t1",
          "tileComponent": [],
          "tileType": "WRAP",
          "uiAction": ""
        }
      ],
      "footer": {
        "menu": [
          {
            "id": "EN01BottomButtonBack",
            "isSearchable": false,
            "subView": [
              {
                "title": {
                  "text": ""
                }
              }
            ],
            "order": 1,
            "type": "BACK_BUTTON",
            "uiAction": "${action2}"
          },
          {
            "id": "EN01BottomButton1",
            "isSearchable": false,
            "subView": [
              {
                "title": {
                  "text": "00f1v1"
                }
              }
            ],
            "order": 2,
            "type": "BUTTON",
            "uiAction": "action1"
          }
        ],
        "orientation": "HORIZONTAL"
      }
    },
    "cardUIAction": {
      "action1": {
        "action": "ev-4-patient-ask-for-appointment"
      },
      "action2": {
        "action": "ev-25-patient-in-touch-navigate-back"
      }
    },
    "id": "00jc2",
    "name": "Patient Score Card"
  }

  console.log(object);