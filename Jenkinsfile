pipeline {
  agent any 
    stages {
      stage('Checkout Code') {
        steps {
          git branch: 'master',
          url: 'https://github.com/krishnachandra1998/sociosurge.git'
		  }
		}
		
	  stage('Deploy to Nginx') {
		steps {
		
			sh '''
			echo "Deploying socio surge "
			sudo rm -rf /var/www/html/*
			sudo cp -r * /var/www/html/
			'''
			}
		}
	}
	
	post {
		success{
		
		echo "Deployment successful !"
		}
		
		failure {
		echo "Deployment fail"
		}
	}

}
