import { Box, Heading } from "@/components/ui";
import { ja } from "@/shared/lang/ja";
import Link from "next/link";

export default function Home() {
    return (
        <Box as="main">
            <Heading>{ja.app.home.title}</Heading>

            <Box>
                <Link href="/force-cache-potter">
                    {ja.app.home.toForceCachePotter}
                </Link>
                <br />
                <Link href="/no-store-potter">
                    {ja.app.home.toNoStorePotter}
                </Link>
                <br />
                <Link href="/server-action-sample">
                    {ja.app.home.toServerActionSample}
                </Link>
            </Box>
        </Box>
    );
}
