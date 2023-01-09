
interface mainTypeObject{
    cardData:{
        [index:number]:string;
    },

    cardLayout:cardlayout,
    cardUIAction:cardUIAction,
    id:string,
    name:string
}
interface cardlayout{
    body: body,
    footer:footer,

}
type body =
    [{
        id:string;
        tileComponent:number[]|string[];
        tileType:string;
        uiAction:string;
    },
];
type Menu = [
    {
        id:string,
        isSearchable:boolean,
        subView:subView,
        order:number,
        type:string,
        uiAction:string;
    },
    {
        id:string,
        isSearchable:boolean,
        subView:subView,
        order:number,
        type:string,
        uiAction:string

    }
]
   

type footer = {
    menu:Menu;
    orientation:string;
};

interface cardUIAction{
    action1:{
        action:string;
    }
    action2:{
        action:string;
    }
}
type subView =[
    {
        title:{
            text:string;
        }
    }
]