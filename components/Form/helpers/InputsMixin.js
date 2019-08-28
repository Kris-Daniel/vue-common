import FindParent from "./FindParent";
export default {
    data() {
        return {
            parent: false
        }
    },
    created() {
        this.parent = FindParent.getParent(this, "formKey");
        if(this.parent) this.parent.addInput(this);
    },
}