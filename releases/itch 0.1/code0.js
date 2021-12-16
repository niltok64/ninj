gdjs.gameCode = {};
gdjs.gameCode.GDcharacterObjects1= [];
gdjs.gameCode.GDcharacterObjects2= [];
gdjs.gameCode.GDcloudObjects1= [];
gdjs.gameCode.GDcloudObjects2= [];
gdjs.gameCode.GDSteelPathObjects1= [];
gdjs.gameCode.GDSteelPathObjects2= [];
gdjs.gameCode.GDSteelBridgeObjects1= [];
gdjs.gameCode.GDSteelBridgeObjects2= [];
gdjs.gameCode.GDGoldIngotObjects1= [];
gdjs.gameCode.GDGoldIngotObjects2= [];
gdjs.gameCode.GDingotsObjects1= [];
gdjs.gameCode.GDingotsObjects2= [];
gdjs.gameCode.GDSlimeObjects1= [];
gdjs.gameCode.GDSlimeObjects2= [];
gdjs.gameCode.GDleftObjects1= [];
gdjs.gameCode.GDleftObjects2= [];
gdjs.gameCode.GDrightObjects1= [];
gdjs.gameCode.GDrightObjects2= [];
gdjs.gameCode.GDcheckpointObjects1= [];
gdjs.gameCode.GDcheckpointObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};


gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.gameCode.GDcharacterObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDGoldIngotObjects1Objects = Hashtable.newFrom({"GoldIngot": gdjs.gameCode.GDGoldIngotObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.gameCode.GDSlimeObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.gameCode.GDleftObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.gameCode.GDSlimeObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.gameCode.GDrightObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.gameCode.GDcharacterObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.gameCode.GDSlimeObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.gameCode.GDcharacterObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.gameCode.GDSlimeObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects = Hashtable.newFrom({"character": gdjs.gameCode.GDcharacterObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcheckpointObjects1Objects = Hashtable.newFrom({"checkpoint": gdjs.gameCode.GDcheckpointObjects1});gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.gameCode.GDcharacterObjects1.length !== 0 ? gdjs.gameCode.GDcharacterObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldIngot"), gdjs.gameCode.GDGoldIngotObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDGoldIngotObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDGoldIngotObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDGoldIngotObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDGoldIngotObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Ingots").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ingots"), gdjs.gameCode.GDingotsObjects1);
{for(var i = 0, len = gdjs.gameCode.GDingotsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDingotsObjects1[i].setString("Ingots: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Ingots"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.gameCode.GDSlimeObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSlimeObjects1[i].getVariableString(gdjs.gameCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDSlimeObjects1[k] = gdjs.gameCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSlimeObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.gameCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.gameCode.GDleftObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].returnVariable(gdjs.gameCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.gameCode.GDSlimeObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSlimeObjects1[i].getVariableString(gdjs.gameCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDSlimeObjects1[k] = gdjs.gameCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSlimeObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.gameCode.GDcheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.gameCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.gameCode.GDrightObjects1);
{for(var i = 0, len = gdjs.gameCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDcheckpointObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcheckpointObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.gameCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.gameCode.GDrightObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].returnVariable(gdjs.gameCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.gameCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.gameCode.condition1IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointY")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.gameCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.gameCode.condition1IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDSlimeObjects1 */
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.gameCode.GDcheckpointObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcharacterObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDcheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcheckpointObjects1 */
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.gameCode.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDcheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.gameCode.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDcheckpointObjects1[0].getPointY("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character"), gdjs.gameCode.GDcharacterObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDcharacterObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharacterObjects1[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDcharacterObjects1[k] = gdjs.gameCode.GDcharacterObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharacterObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDcharacterObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDcharacterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharacterObjects1[i].setScale(0.5);
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDcharacterObjects1.length = 0;
gdjs.gameCode.GDcharacterObjects2.length = 0;
gdjs.gameCode.GDcloudObjects1.length = 0;
gdjs.gameCode.GDcloudObjects2.length = 0;
gdjs.gameCode.GDSteelPathObjects1.length = 0;
gdjs.gameCode.GDSteelPathObjects2.length = 0;
gdjs.gameCode.GDSteelBridgeObjects1.length = 0;
gdjs.gameCode.GDSteelBridgeObjects2.length = 0;
gdjs.gameCode.GDGoldIngotObjects1.length = 0;
gdjs.gameCode.GDGoldIngotObjects2.length = 0;
gdjs.gameCode.GDingotsObjects1.length = 0;
gdjs.gameCode.GDingotsObjects2.length = 0;
gdjs.gameCode.GDSlimeObjects1.length = 0;
gdjs.gameCode.GDSlimeObjects2.length = 0;
gdjs.gameCode.GDleftObjects1.length = 0;
gdjs.gameCode.GDleftObjects2.length = 0;
gdjs.gameCode.GDrightObjects1.length = 0;
gdjs.gameCode.GDrightObjects2.length = 0;
gdjs.gameCode.GDcheckpointObjects1.length = 0;
gdjs.gameCode.GDcheckpointObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
