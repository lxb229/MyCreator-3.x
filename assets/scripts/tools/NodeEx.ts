
import { _decorator, Component, Node, v3, v2, UITransform } from 'cc';
const { ccclass, property } = _decorator;

/* 
    因为EventHander的事件中找不到Node的相关操作 ，因此补充这个类 
    使用 1，0 代替true false
*/

@ccclass('NodeEx')
export class NodeEx extends Component {

    //active: 1  0
    setActive(event: any, active: string) {
        let args = active || event;
        this.node.active = args == '1';
    }

    //scale:3,3,1
    setScale(event: any, scale: string) {
        let args = scale || event;
        this.node.setScale(this.getArgsV3(args));
    }

    //elur:30
    setElur(event: any, elur: string) {
        let args = elur || event;
        this.node.setRotationFromEuler(0, 0, Number(args));
    }

    //anchor: 0.5,0.5
    setAnctor(event: any, anchor: string) {
        let args = anchor || event;
        this.node.getComponent(UITransform).setAnchorPoint(this.getArgsV2(args));
    }

    //size： 100,100
    setContentSize(event: any, size: string) {
        let args = size || event;
        this.node.getComponent(UITransform).setContentSize(this.getArgsV2(args).x, this.getArgsV2(args).y);
    }

    protected getArgsV3(str: string) {
        let list = str.split(',');
        return v3(Number(list[0]), Number(list[1]), Number(list[2]));
    }

    protected getArgsV2(str: string) {
        let list = str.split(',');
        return v2(Number(list[0]), Number(list[1]));
    }
}

