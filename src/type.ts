export type Til = { [folder: string]: string[] };

export type Article = {
  properties: { Name: { title: { text: { content: any } }[] } };
};

export type TagItem = { id: string; name: string; color: string };
export type Properties = { Tags: { multi_select: { options: TagItem[] } } };
