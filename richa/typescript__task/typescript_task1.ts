interface Main1 {
  cardData: {};
  cardLayout: CardLayoutBody;
  cardUIAction: UiAction;
  id: string;
  name: string;
}

interface CardData {
  [prop: string]: string | number | boolean;
}

interface CardLayoutBody {
  body: body[];
  footer: Footer;
}

interface body {
  id: string;
  tileComponent: string | number | boolean[];
  tileType: string;
  uiAction: string;
}

interface Footer {
  menu: Menuobj[];
  orientation: string;
}

interface Menuobj {
  id: string;
  isSearchable: boolean;
  subView: Subview[];
  order: number;
  type: string;
  uiAction: string;
}

interface Subview {
  title: Title;
}
interface Title {
  text: string;
}

interface UiAction {
  action1: Iaction;
  action2: Iaction;
}

interface Iaction {
  action: string;
}

var a: Main1 = {
  cardData: {},
  cardLayout: {
    body: [
      {
        id: "000t1",
        tileComponent: [],
        tileType: "WRAP",
        uiAction: "",
      },
    ],
    footer: {
      menu: [
        {
          id: "EN01BottomButtonBack",
          isSearchable: false,
          subView: [
            {
              title: {
                text: "",
              },
            },
          ],
          order: 1,
          type: "BACK_BUTTON",
          uiAction: "${action2}",
        },
        {
          id: "EN01BottomButton1",
          isSearchable: false,
          subView: [
            {
              title: {
                text: "00f1v1",
              },
            },
          ],
          order: 2,
          type: "BUTTON",
          uiAction: "action1",
        },
      ],
      orientation: "HORIZONTAL",
    },
  },
  cardUIAction: {
    action1: {
      action: "ev-4-patient-ask-for-appointment",
    },
    action2: {
      action: "ev-25-patient-in-touch-navigate-back",
    },
  },
  id: "00jc2",
  name: "Patient Score Card",
};
console.log(a);
