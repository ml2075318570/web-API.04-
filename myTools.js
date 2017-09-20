/**
 * Created by Administrator on 2017/9/19.
 */
// ���Ƿ�װ�Ļ�ȡid�ͱ�ǩ���ļ����Ժ���
function $(selector) {

    if(selector.charAt(0)=="#") { "#div"
        return document.getElementById(selector.substring(1));
    }else {
        return document.getElementsByTagName(selector);
    }


}

// ����һ����ȡ��������ʽ�ĺ���
function getStyle(obj,attr) { // �β��൱�ھֲ�����
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj)[attr];
    }
}
// �����ĸ�С����  �ǲ����ڵ�ļ����Ժ���
function first(obj){
    var ele = obj.firstElementChild || obj.firstChild;
    if(ele&&ele.nodeType==1) {
        return ele
    }else {
        return null;
    }
}

function last(obj){
    var ele = obj.lastElementChild || obj.lastChild;
    if(ele&&ele.nodeType==1) {
        return ele
    }else {
        return null;
    }
}
function prev(obj){
    var ele = obj.previousElementSibling || obj.previousSibling;
    if(ele&&ele.nodeType==1) {
        return ele
    }else {
        return null;
    }
}
function next(obj){
    var ele = obj.nextElementSibling || obj.nextSibling;
    if(ele&&ele.nodeType==1) {
        return ele
    }else {
        return null;
    }
}
// ���Ƿ�װ��һ�����ĺ���
function unbind(obj,evType,evFn) {
    if(obj.removeEventListener) {
        obj.removeEventListener(evType,obj.handle,false);
    }else if(obj.detachEvent) {
        obj.detachEvent("on"+evType,obj.handle);
    }else {
        obj["on"+evType] = null;
    }

}

// ����һ���󶨷�ʽ�ļ����Ժ���
function bind(obj,evType,evFn) {
    // ����������������м��  ���ʶ��֧��addEventListener ��ֱ��ʹ������󶨷�ʽ
    // �����֧��������� ���պ���ķ�ʽ���а�

    obj.handle = function(){
        evFn.call(obj);
    }

    if(obj.addEventListener){
        // ��׼������������
        obj.addEventListener(evType,evFn,false);
        obj.handle = evFn;
    }else if(obj.attachEvent) {
        //IE6 7 8 ������󶨷�ʽ
        obj.attachEvent("on"+evType,obj.handle);
    } else {
        // ���Ϸ�������֧�ֵĺ��ϵ������ ���������
        obj["on"+evType] = evFn;

    }
}