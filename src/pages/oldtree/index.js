import React, { Component } from 'react'
import Oldtree from './Oldtree'
import { Route, Switch, Redirect } from 'react-router-dom'
import OldIntroduction from './suboldtree/OldIntroduction'
import OldFoster from './suboldtree/OldFoster'
import OldAgreement from './suboldtree/OldAgreement'
import OldSureFoster from './suboldtree/OldSureFoster'
import OldSuccessOrder from './suboldtree/OldSuccessOrder'
import UserBlanceInfo from './suboldtree/UserBlanceInfo'
import UserBlance from './suboldtree/UserBlance'
import OldRecharge from './suboldtree/OldRecharge'
import OldEnergyInfo from './suboldtree/OldEnergyInfo'
import OldEnergy from './suboldtree/OldEnergy'
import MyOldtree from './suboldtree/MyOldtree'
import OldTreeCertificate from './suboldtree/OldTreeCertificate'
import OldTreeRecord from './suboldtree/OldTreeRecord'
import PicUpload from './suboldtree/PicUpload'
import OldSuccessRecharge from './suboldtree/OldSuccessRecharge'
export default class Home extends Component {
    render() {
        return (
            <div class="container">

                <Switch>
                    <Redirect to="/oldtree/oldtree" from="/oldtree" exact />
                    <Route path="/oldtree/oldtree" component={Oldtree} />
                    <Route path="/oldtree/suboldtree/oldintro" component={OldIntroduction} />
                    <Route path="/oldtree/suboldtree/oldfoster" component={OldFoster} />
                    <Route path="/oldtree/suboldtree/oldagreement" component={OldAgreement} />
                    <Route path="/oldtree/suboldtree/oldsurefoster" component={OldSureFoster} />
                    <Route path="/oldtree/suboldtree/oldsuccessorder" component={OldSuccessOrder} />
                    <Route path="/oldtree/suboldtree/userbalanceinfo" component={UserBlanceInfo} />
                    <Route path="/oldtree/suboldtree/userbalance" component={UserBlance} />
                    <Route path="/oldtree/suboldtree/userrecharge" component={OldRecharge} />
                    <Route path="/oldtree/suboldtree/usersuccessrecharge" component={OldSuccessRecharge} />
                    <Route path="/oldtree/suboldtree/energyinfo" component={OldEnergyInfo} />
                    <Route path="/oldtree/suboldtree/energy" component={OldEnergy} />
                    <Route path="/oldtree/suboldtree/myoldtree" component={MyOldtree} />
                    <Route path="/oldtree/suboldtree/oldtreecer" component={OldTreeCertificate} />
                    <Route path="/oldtree/suboldtree/oldtreerecord" component={OldTreeRecord} />
                    <Route path="/oldtree/suboldtree/picupload" component={PicUpload} />
                </Switch>

            </div>
        )
    }
}
