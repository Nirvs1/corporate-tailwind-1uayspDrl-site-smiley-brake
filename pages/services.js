import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Banner1 from "@/templates/banners/banner-1/banner-1";
import Block2 from "@/templates/blocks/block-2/block-2";
import Cover4 from "@/templates/covers/cover-4/cover-4";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.servicesSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Cover4 content={props.servicesLandingContent} />
			 <Block2 content={props.servicesBlockContent} />
			 <Banner1 content={props.contactTeaserContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'service'});
  return {
    props: props,
    revalidate: 10
  };
}