<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'd<[ir*?g$:ZWg<IiqoW,8Ek$hEBCN/?DF2qI1|OF$(7dp:3FBV:78I|8<_8Yr =x' );
define( 'SECURE_AUTH_KEY',   ';C:#[N?M%6_zn}11=m5b_?-GL,i^oK*k!V.+K.pWWV5_c ^wG!,;+`kDvs,~z1Ug' );
define( 'LOGGED_IN_KEY',     '#/FCaoB2OWyIAC~wbvnkeS Hn;k7<DK>;ZOq?Y|&.YhdF~|Vp>w5U:gW[y7le=#.' );
define( 'NONCE_KEY',         't:B5A!HN:I(7>c,Tt#DoI6K9aRbg^w(s1akhSMo9vQEJ99=W+vy_0GEih<1N eaG' );
define( 'AUTH_SALT',         'Y]3T%KE6i(Nxi:W ^PFbiR+%/!C|83j`[Tc6{%}0Rbri; e0PK&TE.XtCBk[rCC@' );
define( 'SECURE_AUTH_SALT',  '?tg49n>C7BW8]1TSH_-Iy9/.%y~$|FYLWarUO8]>?YnLhE`YQMq&zi`[{+s@kt#w' );
define( 'LOGGED_IN_SALT',    'idZG?9.>9~5ZEBX;vj,uf(-bII`[oetDO>@<[@e8#G43G`rbWsi^C46$l&Du6Oc9' );
define( 'NONCE_SALT',        '<!|o6X)BDp8@7DIKLsd8 ;6NdV%9@;I*2=.~&I9rsyY{$]e1r+h|j$|Si4AS2m`d' );
define( 'WP_CACHE_KEY_SALT', '(Cckd8?5bZ-]Fn;?``;IasR$Hu9$<KpK?]c>3y+~kT<-J5xOk@K`8nkg8fZ*Tv:8' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
