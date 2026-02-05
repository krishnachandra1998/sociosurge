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
			sudo rm -rf /var/www/static-site/*
			sudo cp -r * /var/www/static-site/
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
