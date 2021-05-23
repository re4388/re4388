// API doc: https://developers.notion.com/docs/working-with-page-content
// @notionhq/client: https://github.com/makenotion/notion-sdk-js
// ref code: https://glitch.com/edit/#!/notion-github-sync?path=package.json%3A15%3A21

import { Properties, TagItem } from './type';

export async function updateArticleFromGithubTIL(
  titles: string[],
  urls: string[],
  tags: string[],
  properties: Properties
) {
  const multiSelectOptionList: TagItem[] = properties.Tags.multi_select.options;
  const multiSelectOptionListNameProp = multiSelectOptionList.map(
    (item) => item.name
  );

  // gen all article props
  const propList = [];
  for (let idx = 0; idx < titles.length; idx++) {
    // tag checking: we can't add new tag in this api, so we checked and provide 'not categorized' if not exist
    const tagsInGithub = tags[idx];
    let tagsToNotion = 'not categorized';
    let tagsColorToNotion = 'red';

    if (multiSelectOptionListNameProp.includes(tagsInGithub)) {
      tagsToNotion = tagsInGithub;
      tagsColorToNotion = multiSelectOptionList.filter(
        (item) => item.name === tagsInGithub
      )[0].color;
    }

    propList.push({
      title: titles[idx],
      url: urls[idx],
      tag: tagsToNotion,
      tagColor: tagsColorToNotion,
    });
  }

  // mapping to props structure
  const notionProps = [];
  for (const prop of propList) {
    notionProps.push(genProp(prop.title, prop.url, prop.tag, prop.tagColor));
  }

  return notionProps;
}

function genProp(title: string, url: string, tag: string, tagColor: string) {
  return {
    Name: {
      type: 'title',
      title: [
        {
          text: {
            content: title,
          },
        },
      ],
    },
    URL: {
      type: 'url',
      url: url,
    },
    Tags: {
      type: 'multi_select',
      multi_select: [
        {
          name: tag,
          color: tagColor,
        },
      ],
    },
    Created: {
      type: 'date',
      date: { start: new Date().toISOString(), end: null },
    },
  };
}
