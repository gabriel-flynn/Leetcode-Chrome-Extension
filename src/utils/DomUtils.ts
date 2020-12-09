export const waitForDomToRender = (querySelectorString:string,  intervalTime:number = 200) : Promise<HTMLElement> => {
    return new Promise(resolve => {
        let domElement;
        let interval = setInterval(() => {
            domElement = document.querySelector(querySelectorString);
            if(domElement != null) {
                clearInterval(interval);
                resolve(domElement);
            }
        }, intervalTime);
    })
}

export const openListOnProblemPage = () : Promise<void> => {
    return new Promise<void>(async resolve => {
        const parentDivQuery= "[class^=desktop]"
        const cssClassName = 'ant-popover-hidden'
        if(document.querySelector(parentDivQuery) == null) {
            let event = new MouseEvent("mouseout", {"relatedTarget": document.querySelector("[class^=description] div:nth-child(2) > button:nth-child(4) span")});
            document.dispatchEvent(event);
            await waitForDomToRender("[class^=desktop]")
        }
        document.getElementsByClassName(cssClassName)?.item(0)?.classList?.remove('ant-popover-hidden');
        resolve();
    })
    
}