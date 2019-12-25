import S from '@sanity/desk-tool/structure-builder'
import Repeat from 'react-icons/lib/md/repeat'
import * as components from './schemas/components/index'
import * as sections from './schemas/sections/index'

const hiddenTypes = [
  'companyInfo',
  'siteExtra',
  'siteSeoSettings',
  'secrets',
  'frontpage',
  'page',
  'route',
  'intent',
  'agent',
  'fulfillment',
  /**
   * Automatically hide the shared versions of the components and sections from the root pane
   */
  ...[...Object.values(components), ...Object.values(sections)].reduce(
    (acc, { name }) => [...acc, name, `shared.${name}`],
    []
  )

]

const hiddenDocTypes = listItem => !hiddenTypes.includes(listItem.getId())

const sectionItems = S.listItem()
  .title('Shared sections')
  .icon(Repeat)
  .child(
    S.list('Shared sections')
      .id('shared-sections')
      .title('Shared sections')
      .items([
        ...Object.values(sections).map(({ name, title }) =>
          S.documentTypeListItem(`shared.${name}`).title(title)
        )
      ])
  )

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Company Info')
        .schemaType('companyInfo')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('company-info')
        ),
      S.listItem()
        .title('Site Seo Settings')
        .schemaType('siteSeoSettings')
        .child(
          S.editor()
            .id('siteSeoSettings')
            .schemaType('siteSeoSettings')
            .documentId('siteSeoSettings')
        ),
      S.listItem()
        .title('Site Extra Settings')
        .schemaType('siteExtra')
        .child(
          S.editor()
            .id('siteExtra')
            .schemaType('siteExtra')
            .documentId('siteExtra')
        ),
      S.listItem()
        .title('Website')
        .schemaType('page')
        .child(
          S.list()
            .title('Website')
            .id('website')
            .items([
              /* S.documentTypeListItem('navigation').title('Navigation'), */
              S.documentTypeListItem('route').title('Routes'),
              S.documentTypeListItem('page').title('Pages'),
              S.documentTypeListItem('post').title('Posts'),
              sectionItems
              /* ...Object.values(components).map(({name}) => ([S.documentTypeListItem(name), S.documentTypeListItem(`shared${name}`)])) */
              /* ...Object.values(sections).reduce(makeDocumentsAndObjects, []).map(name => S.documentTypeListItem(name).title(name)) */
            ])
        ),
      S.listItem()
        .title('Assistant')
        .schemaType('agent')
        .child(
          S.list()
            .title('Assistant')
            .id('assistant')
            .items([
              S.listItem()
                .title('Agent')
                .schemaType('agent')
                .child(
                  S.editor()
                    .id('agent')
                    .schemaType('agent')
                    .documentId('agent')
                ),
              S.documentTypeListItem('intent').title('Intents'),
              S.documentTypeListItem('fulfillment').title('Fulfillments')
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .id('secrets')
        .title('Secrets')
        .schemaType('secrets')
        .child(
          S.editor()
            .id('siteSecrets')
            .schemaType('secrets')
            .documentId('private.secrets')
        ),
    ])
