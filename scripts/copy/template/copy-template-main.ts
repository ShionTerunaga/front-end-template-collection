import { deleteDirectories } from "./delete-directories";
import { reactCopy } from "./react-copy";
import { vueCopy } from "./vue-copy";

function main() {
    deleteDirectories();

    reactCopy();

    vueCopy();
}

main();
