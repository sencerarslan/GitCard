import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {    
    this.dataGet();
  }

  username:any;
  data:any;
  data_followers:any;
  data_following:any;
 
  dataGet(){ 
    this.data ="";
    this.githubService.getir(this.username).subscribe((res => {
      console.log(res)
      this.data = res; 
      this.dataFollowers();
      this.dataFollowing();
    }),(err=>{ 
      console.log(this.data);
      console.log(err);
    }));
  }


  dataFollowers(){
    this.data_followers ="";
    this.githubService.getir(this.username+'/followers').subscribe((res => {
      console.log(res)
      this.data_followers = res;
    }),(err=>{
      console.log(err);
    }));
  }

  dataFollowing(){
    this.data_following ="";
    this.githubService.getir(this.username+'/following').subscribe((res => {
      console.log(res)
      this.data_following = res;
    }),(err=>{
      console.log(err);
    }));
  } 

} 