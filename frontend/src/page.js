import React from 'react'
import FeatureDetailList from './components/FeatureDetailList'
import CallToAction from './components/CallToAction'
import Hero from './components/Hero'
import Layout from './containers/Layout'
import LatestUpdates from './containers/LatestUpdates'
import SiteNav from './containers/SiteNav'
import SiteFooter from './containers/SiteFooter'
import ScrollTop from './components/scrollTop'
import FloatForm from './components/floatForm'
import TestimonialCarousel from './components/TestimonialCarousel'
import ModalStackProvider from './providers/ModalStack'
import ThemeProvider from './providers/Theme'

import {
  mapArticleToProps,
  mapSliderToProps,
  mapPersonsToProps,
  mapPageHeaderToProps,
  mapCenterArticleToProps,
  mapLeftImageArticleToProps,
  mapRightImageArticleToProps,
  mapCenterImageLayoutToProps,
  mapLetterDefinitionToProps,
  mapDefinitionToProps,
  mapCustomersBlockToProps,
  mapSharedHeroToHeroProps,
  mapSharedFeatureCollectionToFeatureCollectionProps,
  mapSharedCasesCollectionProps,
  mapSharedLatestUpdatedToLatestUpdatedProps,
  mapSharedNavigationToSiteNavProps,
  mapSharedNavigationToSiteFooterProps,
  mapTestimonialCollectionToTestimonialCarouselProps,
  mapSharedCallToActionToCallToActionProps
} from './lib/mapToProps'
import Article from './components/Article'
import Slider from './components/Slider'
import Persons from './components/Persons'
import PageHeader from './components/PageHeader'
import CenterArticle from './components/CenterArticle'
import CenterImageLayout from './components/CenterImageLayout'
import LetterDefinition from './components/LetterDefinition'
import Definition from './components/Definition'
import CustomersBlock from './components/CustomersBlock'
import LeftImageArticle from './components/LeftImageArticle'
import RightImageArticle from './components/RightImageArticle'
import CasesCollection from './components/CasesCollection'

const Page = ({ pageContext = {} }) => (
  <ThemeProvider>
    {theme => (
      <ModalStackProvider key={'1'}>
        {modalStackDepth => (
          <Layout overlay={modalStackDepth > 0} class={(pageContext.page.customClass != null) ? pageContext.page.customClass : null}>
            {pageContext.page.customClass}
            {!pageContext.page && <div>No data</div>}
            {pageContext.page &&
              !pageContext.page.sections && <div>No sections</div>}
            {pageContext.page &&
              pageContext.page.sections &&
              pageContext.page.sections.map(section => {
                const { __typename, referencedSection = {} } = section
                switch (__typename) {
                  default:
                    switch (__typename) {
                      case 'SANITY_Article':
                        return (
                          <Article
                            key={section._key}
                            theme={theme}
                            {...mapArticleToProps(section)}
                          />
                        )
                      case 'SANITY_Persons':
                        return (
                          <Persons
                            key={section._key}
                            theme={theme}
                            {...mapPersonsToProps(section)}
                          />
                        )
                      case 'SANITY_Slider':
                        return (
                          <Slider
                            key={section._key}
                            theme={theme}
                            {...mapSliderToProps(section)}
                          />
                        )
                      case 'SANITY_LeftImageArticle':
                        return (
                          <LeftImageArticle
                            key={section._key}
                            theme={theme}
                            {...mapLeftImageArticleToProps(section)}
                          />
                        )
                      case 'SANITY_RightImageArticle':
                        return (
                          <RightImageArticle
                            key={section._key}
                            theme={theme}
                            {...mapRightImageArticleToProps(section)}
                          />
                        )
                      case 'SANITY_PageHeader':
                        return (
                          <PageHeader
                            key={section._key}
                            theme={theme}
                            {...mapPageHeaderToProps(section)}
                          />
                        )
                      case 'SANITY_CenterArticle':
                        return (
                          <CenterArticle
                            key={section._key}
                            theme={theme}
                            {...mapCenterArticleToProps(section)}
                          />
                        )
                      case 'SANITY_CenterImageLayout':
                        return (
                          <CenterImageLayout
                            key={section._key}
                            theme={theme}
                            {...mapCenterImageLayoutToProps(section)}
                          />
                        )
                      case 'SANITY_LetterDefinition':
                        return (
                          <LetterDefinition
                            key={section._key}
                            theme={theme}
                            {...mapLetterDefinitionToProps(section)}
                          />
                        )
                      case 'SANITY_Definition':
                        return (
                          <Definition
                            key={section._key}
                            theme={theme}
                            {...mapDefinitionToProps(section)}
                          />
                        )
                      case 'SANITY_CustomersBlock':
                        return (
                          <CustomersBlock
                            key={section._key}
                            theme={theme}
                            {...mapCustomersBlockToProps(section)}
                          />
                        )
                      case 'SANITY_Hero':
                        return (
                          <Hero
                            key={section._key}
                            {...mapSharedHeroToHeroProps(section)}
                            theme={theme}
                          />
                        )
                      case 'SANITY_LatestUpdates':
                        return (
                          <LatestUpdates
                            key={section._key}
                            {...mapSharedLatestUpdatedToLatestUpdatedProps(
                              section
                            )}
                          />
                        )
                      case 'SANITY_FeatureCollection':
                        return (
                          <FeatureDetailList
                            key={section._key}
                            {...mapSharedFeatureCollectionToFeatureCollectionProps(
                              section
                            )}
                          />
                        )
                      case 'SANITY_Navigation':
                        switch (section.id) {
                          case 'mainNav':
                            return (
                              <SiteNav
                                key={section._key}
                                {...mapSharedNavigationToSiteNavProps(section)}
                              />
                            )
                          case 'footerNav':
                            return (
                              <SiteFooter
                                key={section._key}
                                {...mapSharedNavigationToSiteFooterProps(
                                  section
                                )}
                              />
                            )
                          default:
                            return (
                              <div key={section._key}>
                                Unknown navigation id: {section.id} (try <code>mainNav</code> or <code>footer</code>)
                              </div>
                            )
                        }
                      case 'SANITY_TestimonialCollection':
                        return (
                          <TestimonialCarousel
                            key={section._key}
                            {...mapTestimonialCollectionToTestimonialCarouselProps(
                              section
                            )}
                          />
                        )
                      case 'SANITY_CallToAction':
                        return (
                          <CallToAction
                            key={section._key}
                            {...mapSharedCallToActionToCallToActionProps(
                              section
                            )}
                            theme={theme}
                          />
                        )
                      default:
                        return (
                          <div key={section._id}>
                            Unknown section
                            {JSON.stringify({ __typename, section }, null, 2)}
                          </div>
                        )
                    }
                  case 'SANITY_SharedSection':
                    switch (referencedSection.__typename) {
                      case 'SANITY_SharedArticle':
                        return (
                          <Article
                            key={referencedSection._id}
                            {...mapArticleToProps(referencedSection)}
                            theme={theme}
                          />
                        )
                        case 'SANITY_SharedPersons':
                        return (
                          <Persons
                            key={section._key}
                            theme={theme}
                            {...mapPersonsToProps(section)}
                          />
                        )
                      case 'SANITY_SharedSlider':
                        return (
                          <Slider
                            key={referencedSection._id}
                            {...mapSliderToProps(referencedSection)}
                            theme={theme}
                          />
                        )
                      case 'SANITY_SharedCasesCollection':
                        return (
                          <CasesCollection
                            key={referencedSection._id}
                            {...mapSharedCasesCollectionProps(referencedSection)}
                            theme={theme}
                          />
                        )
                        case 'SANITY_SharedLetterDefinition':
                          return (
                            <LetterDefinition
                              key={section._key}
                              theme={theme}
                              {...mapLetterDefinitionToProps(section)}
                            />
                          )
                        case 'SANITY_SharedDefinition':
                          return (
                            <Definition
                              key={section._key}
                              theme={theme}
                              {...mapDefinitionToProps(section)}
                            />
                          )
                      case 'SANITY_SharedHero':
                        return (
                          <Hero
                            key={referencedSection._id}
                            {...mapSharedHeroToHeroProps(referencedSection)}
                            theme={theme}
                          />
                        )

                      case 'SANITY_SharedFeatureCollection':
                        return (
                          <FeatureDetailList
                            key={referencedSection._id}
                            {...mapSharedFeatureCollectionToFeatureCollectionProps(
                              referencedSection
                            )}
                          />
                        )

                      case 'SANITY_SharedLatestUpdates':
                        return (
                          <LatestUpdates
                            key={referencedSection._id}
                            {...mapSharedLatestUpdatedToLatestUpdatedProps(
                              referencedSection
                            )}
                          />
                        )

                      case 'SANITY_SharedNavigation':
                        switch (referencedSection.id) {
                          case 'mainNav':
                            return (
                              <SiteNav
                                key={referencedSection._id}
                                {...mapSharedNavigationToSiteNavProps(
                                  referencedSection
                                )}
                              />
                            )
                          case 'footerNav':
                            return (
                              <SiteFooter
                                key={referencedSection._id}
                                {...mapSharedNavigationToSiteFooterProps(
                                  referencedSection
                                )}
                              />
                            )
                          default:
                            return (
                              <div key={referencedSection._id}>
                                Unknown navigation id: {referencedSection.id} (try <code>mainNav</code> or <code>footer</code>)
                              </div>
                            )
                        }

                      case 'SANITY_SharedTestimonialCollection':
                        return (
                          <TestimonialCarousel
                            key={referencedSection._id}
                            {...mapTestimonialCollectionToTestimonialCarouselProps(
                              referencedSection
                            )}
                          />
                        )

                      case 'SANITY_SharedCallToAction':
                        return (
                          <CallToAction
                            key={referencedSection._id}
                            {...mapSharedCallToActionToCallToActionProps(
                              referencedSection
                            )}
                            theme={theme}
                          />
                        )

                      default:
                        return (
                          <pre key={referencedSection._id}>
                            {JSON.stringify(referencedSection, null, 2)}
                          </pre>
                        )
                    }
                }
              })}
              <ScrollTop />
              <FloatForm />
          </Layout>
        )}
      </ModalStackProvider>
    )}
  </ThemeProvider>
)

export default Page