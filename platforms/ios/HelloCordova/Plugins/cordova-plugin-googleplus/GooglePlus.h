#import <Cordova/CDVPlugin.h>
//#import <GooglePlus/GooglePlus.h>
//#import <Foundation/Foundation.h>
#import <GoogleSignIn/GoogleSignIn.h>

@interface GooglePlus : CDVPlugin<GIDSignInDelegate, GIDSignInUIDelegate>

@property (nonatomic, copy) NSString* callbackId;
@property (nonatomic, assign) BOOL isSigningIn;

- (void) isAvailable:(CDVInvokedUrlCommand*)command;
- (void) login:(CDVInvokedUrlCommand*)command;
- (void) trySilentLogin:(CDVInvokedUrlCommand*)command;
- (void) logout:(CDVInvokedUrlCommand*)command;
- (void) disconnect:(CDVInvokedUrlCommand*)command;
- (void) share_unused:(CDVInvokedUrlCommand*)command;

@end
