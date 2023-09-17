import InstagramOne from '../common/components/instagram/InstagramOne';
import FooterThree from '../common/elements/footer/FooterThree';
import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import { getAllPosts } from '../../lib/api';
import PostSectionOne from '../common/components/post/PostSectionOne';
import PostSectionThree from '../common/components/post/PostSectionThree';
import PostSectionFive from '../common/components/post/PostSectionFive';
import SliderOne from '../common/components/slider/SliderOne';


const HomeDefault = ({allPosts}) => {

  const videoPost = allPosts.filter(post => post.postFormat === "video");
 
  return ( 
    <>
      <HeadTitle pageTitle="overreacted" />
      <HeaderOne postData={allPosts}/>
      <SliderOne postData={allPosts} />
      <PostSectionOne postData={allPosts}/>
      <PostSectionFive postData={allPosts}/>
      <PostSectionThree postData={videoPost} heading="Featured Videos"/>
      <FooterThree />
      
    </>
   );
}
 
export default HomeDefault;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'featureImg',
    'postFormat',
    'featured',
    'slidePost',
    'date',
    'slug',
    'cate',
    'cate_img',
    'author_img',
    'author_name',
    'post_views',
    'read_time',
    'author_social',
  ])

  return {
    props: { allPosts }
  }
}



