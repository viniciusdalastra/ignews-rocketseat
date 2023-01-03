// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for publication documents */
interface PublicationDocumentData {
    /**
     * Title field in *publication*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: publication.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Content field in *publication*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: publication.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * publication document from Prismic
 *
 * - **API ID**: `publication`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PublicationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PublicationDocumentData>, "publication", Lang>;
export type AllDocumentTypes = PublicationDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PublicationDocumentData, PublicationDocument, AllDocumentTypes };
    }
}
