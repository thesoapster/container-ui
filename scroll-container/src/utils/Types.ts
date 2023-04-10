export type ContextStoreProps = {
    children: React.ReactNode;
};

export class Container {
    label: string;
    sections: Section[]

    constructor () {
        this.label = "";
        this.sections = new Array<Section>();
    }
};

export type Section = {
    label: string;
    nodes: Node[];
};

export type Node = {
    completed: boolean;
    value: string;
};
