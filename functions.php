<?php
if (class_exists('MultiPostThumbnails')) {
new MultiPostThumbnails(
array(
'label' => 'logo',
'id' => 'secondary-image',
'post_type' => 'post'
)
);
new MultiPostThumbnails(
array(
'label' => 'banner',
'id' => 'third-image',
'post_type' => 'post'
)
);
}
add_filter( 'show_admin_bar', '__return_false' );

register_nav_menus(array('header-menu' => __( 'Damien-Menu' ),));  

function my_add_pages() {
    add_menu_page('Help page', 'user help', 'manage_options', __FILE__, 'my_toplevel_page');
}

function my_toplevel_page() {
    echo '
    ������˵�ҳ���HTML����
    ';

}
add_theme_support( 'post-thumbnails' ); 
add_action('admin_menu', 'my_add_pages');
add_filter( 'default_content', 'custom_editor_content' );   
function custom_editor_content( $content ) {   
    $content = '   
        <div class="content-col-main">   
        <h1>This is your main page content</h1>
	<p>This is your main page content</p> 
        &nbsp;   
        </div>   
        <div class="content-col-side">   
        This is your sidebar content   
        &nbsp;   
        </div>
	<div class="core-content">
		<h1>this heading</h1>
		<p>this is word</p>

	</div>
	<div class="content-col-3"> 
	<h1>this is heading</h1>
	</div>
	<div class="content-col-3"> 
	this is image
	</div>
	<div class="content-col-3">
	this is image
	</div> 

';
    return $content;   
}  
 add_editor_style( 'editor-style.css' ); 
remove_action( 'wp_head', 'feed_links_extra', 3 ); //ȥ������feed
remove_action( 'wp_head', 'feed_links', 2 ); //ȥ������feed
remove_action( 'wp_head', 'rsd_link' ); //���Blog��Զ�����߱༭���ӿ�
remove_action( 'wp_head', 'wlwmanifest_link' ); //Windows Live Writer�ӿ�
remove_action( 'wp_head', 'index_rel_link' ); //�Ƴ���ǰҳ�������
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); //�Ƴ��������µ�url
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); //�Ƴ��ʼ���µ�url
remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );//�Զ����ɵĶ�����
remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 ); ///�Ƴ��������µ�url
remove_action( 'wp_head', 'wp_generator' ); // �Ƴ��汾�� 
?>