import WidgetCategory from "./WidgetCategory";
import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetPostList from "./WidgetPostList";
import WidgetSocialShare from "./WidgetSocialShare";

const SidebarOne = ({dataPost}) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={dataPost}/>
      <WidgetPostList postData={dataPost}/>
      <WidgetInstagramPost />
      <WidgetSocialShare />
    </div>
  );
};

export default SidebarOne;
