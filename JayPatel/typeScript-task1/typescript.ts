interface TitleObject {
    text: string
}

interface SubViewItem {
    title: TitleObject
}

interface MenuItem {
    id: string,
    isSearchable: boolean,
    subView: SubViewItem[],
    order: number,
    type: string,
    uiAction: string
}

interface FooterData {
    menu: MenuItem[],
    orientation: string
}

interface TitleComponent {
    [key: string]: string
}

interface BodyLayout {
    id: string,
    tileComponent: number[] | string[] | TitleComponent[],
    tileType: string,
    uiAction: string
}

interface ActionObject {
    action: string
}

interface CardUIAction {
    [action: string]: ActionObject
}

interface CardLayout {
    body: BodyLayout[],
    footer: FooterData
}

interface CardData {
    [index: number]: string
}


interface Main {
    cardData: CardData,
    cardLayout: CardLayout,
    cardUIAction: CardUIAction,
    id: string,
    name: string
}





const mainObj: Main = {
    cardData: {},
    cardLayout: {
        body: [
            {
                id: "000t1",
                tileComponent: [],
                tileType: "WRAP",
                uiAction: ""
            }
        ],
        footer: {
            menu: [
                {
                    id: "EN01BottomButtonBack",
                    isSearchable: false,
                    subView: [
                        {
                            title: {
                                text: ""
                            }
                        }
                    ],
                    order: 1,
                    type: "BACK_BUTTON",
                    uiAction: "${action2}"
                },
                {
                    id: "EN01BottomButton1",
                    isSearchable: false,
                    subView: [
                        {
                            title: {
                                text: "00f1v1",
                            }
                        }
                    ],
                    order: 2,
                    type: "BUTTON",
                    uiAction: "action1"
                }
            ],
            orientation: "HORIZONTAL"
        }
    },
    cardUIAction: {
        action1: {
            action: "ev-4-patient-ask-for-appointment"
        },
        action2: {
            action: "ev-25-patient-in-touch-navigate-back"
        }
    },
    id: "00jc2",
    name: "Patient Score Card"
}

console.log(mainObj);