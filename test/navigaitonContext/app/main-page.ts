
import { getFrameById } from "tns-core-modules/ui/frame";

export function navigate() {
    const frame = getFrameById("myFrame");
    
    frame.navigate({
        moduleName: "sub-page",
        context: { title: "NativeScript is Awesome!"}
    });
}