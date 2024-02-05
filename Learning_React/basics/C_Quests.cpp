#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pb push_back
/*
int n; cin>>n; vector<int>v(n); for(int i=0;i<n;i++) cin>>v[i];
*/


ll solve()
{
ll n,k;
cin>>n>>k;
vector<ll>a(n);
for(int i=0;i<n;i++) cin>>a[i];
vector<ll>b(n);
for(int i=0;i<n;i++) cin>>b[i];


ll fans=0;
ll mx=0;
ll t=0;
ll curr=0;
while(t<k&&t<n)
{
    ll ans=0;
    curr+=a[t];
ans+=curr;
mx=max(mx,b[t]);
ans=ans+(k-t-1)*mx;
fans=max(ans,fans);
// cout<<"here"<<mx<<" "<<ans<<" "<<t;
t++;
}
return fans;


}



int main()
{
int t; cin >> t;
while (t--)
{
    cout<<solve()<<endl;
    //solve();
}
}