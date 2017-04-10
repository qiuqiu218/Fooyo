    <nav>
<ul>
<?php 
    // 列出顶部导航菜单，菜单名称为mymenu，只列出一级菜单
    wp_nav_menu( array( 'menu' => 'mymenu', 'depth' => 1) );
    wp_head();
?>
    </ul>
      <div class="lan">

      </div>
    </nav>