import { ja } from "@/shared/lang/ja";
import RandomStart from "./_components/random-start/random-start";
import { Box, Heading } from "@/components/ui";

function ServerActionSample() {
    return (
        <Box as="main">
            <Heading as="h1">{ja.app.serverActionSample.title}</Heading>

            <RandomStart />
        </Box>
    );
}

export default ServerActionSample;
