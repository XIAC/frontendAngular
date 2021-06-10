pipeline {
  agent any
  stages {
    stage('BUILD') {
      steps {
        echo 'Construccion del proyecto'
      }
    }

    stage('TEST') {
      parallel {
        stage('TEST') {
          steps {
            echo 'Test del proyecto'
          }
        }

        stage('Windows Test') {
          steps {
            echo 'Pruebas Windows'
          }
        }

      }
    }

    stage('Deploy Staging') {
      steps {
        echo 'Deploy ensayo'
      }
    }

    stage('Deploy Production') {
      steps {
        echo 'Modo produccion'
      }
    }

  }
}