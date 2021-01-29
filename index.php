<?php
/**
 * Plugin Name: WeJob WCS Candidates DB
 * Version: 0.1
 * Author: Vivien Michelesi,Emilie Martel,Valérie Tylski-Vincent,Jonathn François,Benoît Hubert
 * Description: Base de données candidats pour WeJob
 */

// TODO: gérer modes dev et prod
// TODO: gérer le baseUrl du React Router

/**
 * Replace relative links with abs links
 */
function replace_in_entry($html, $attr, $ext) {
  $plugin_dist_url = plugins_url( "/dist", __FILE__ );
  $replaced = str_replace("$attr=\"/", "$attr=\"$plugin_dist_url/", $html);
  return str_replace(".$ext", ".$ext?ts=" . time(), $replaced);
}

function wejob_public_app( $atts ) {
  $body_inner = file_get_contents(__DIR__ . '/dist/index-wp-plugin.html');
  $script_replaced = replace_in_entry($body_inner, "src", "js");
  $styles_replaced = replace_in_entry($script_replaced, "href", "css");
  return $styles_replaced;
}

add_shortcode( 'wejob_candidates_db', 'wejob_public_app' );
